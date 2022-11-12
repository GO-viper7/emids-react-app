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
        fields = ['name', 'email', 'password', 'specializations', 'experience', 'patients']
        
        
class SnippetSerializer(serializers.ModelSerializer):
    patients = PatientSerializer(many=True, read_only=True)

    class Meta:
        model = Snippet
        fields = ['name', 'medicationName', 'rxNormCode', 'frequency', 'dosage', 'route', 'additionalInstructions']