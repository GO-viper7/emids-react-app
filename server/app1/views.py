from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Patient
from rest_framework import status
from .serializers import *

@api_view(['GET', 'POST'])
def patient(request):
    if request.method == 'GET' :     
        data = Patient.objects.all()
        serializer = PatientSerializer(data, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    
@api_view(['POST'])
def register(request):
    if request.method == 'POST' :
        serializer = DoctorSerializer(data=request.data)
        if serializer.is_valid() :
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    