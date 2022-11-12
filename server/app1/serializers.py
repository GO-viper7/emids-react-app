from rest_framework import serializers
from .models import *

class PatientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Patient
        fields = ['name', 'age', 'consultedOn', 'consultedWith']
        
class DoctorSerializer(serializers.ModelSerializer):
    patients = PatientSerializer(many=True, read_only=True)

    class Meta:
        model = Doctor
        fields = ['name', 'specialization', 'experience', 'patients']