from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Patient
from rest_framework import status
from .serializers import PatientSerializer

@api_view(['GET', 'POST'])
def patient(request):
    if request.method == 'GET' :     
        data = Patient.objects.all()
        serializer = PatientSerializer(data, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    