from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from rest_framework import status
from .serializers import *
import speech_recognition as sr


@api_view(['GET', 'POST'])
def patient(request):
    if request.method == 'GET' :     
        data = Patient.objects.all()
        serializer = PatientSerializer(data, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    
@api_view(['POST'])
def doctorRegister(request):
    if request.method == 'POST' :
        serializer = DoctorSerializer(data=request.data)
        if serializer.is_valid() :
            serializer.save()
            print(serializers)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
@api_view(['POST'])
def doctorLogin(request):
    if request.method == 'POST' :
        data = Doctor.objects.get(password=request.data['password'])
        fake_data = Doctor.objects.get(email=request.data['email'])
        if(data == fake_data) :
            serializer = DoctorSerializer(data)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
@api_view(['POST', 'GET'])
def snippet(request):
    # if request.method == 'POST' :
    #     serializer = SnippetSerializer(data=request.data)
    #     if serializer.is_valid() :
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'POST' :
        data = Snippet.objects.all()
        serializer = SnippetSerializer(data)
        print(serializer.data)
        return Response(serializer.data, status=status.HTTP_200_OK)
 
 
 
text = []
flag=0   
    
def recog():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        audio = r.listen(source)
        try:
            text = r.recognize_google(audio)
            return text
        except:
            print("Sorry could not recognize what you said")
            return ''
    
    
@api_view(['GET'])
def speech(request):
    if request.method == 'GET' :
        
      
         
        t = recog()
        text.append(t)
        return Response(text, status=status.HTTP_200_OK)
