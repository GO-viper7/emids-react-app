from django.db import models

class Patient(models.Model) :
  name = models.CharField(max_length=50)
  age = models.IntegerField()
  consultedOn = models.DateField()
  consultedWith = models.CharField(max_length=50, default='')
  
  def __str__(self) -> str:
    return self.name
  
  
  
class Snippet(models.Model):
   name = models.CharField(max_length=100)
   medicationName = models.CharField(max_length=50)
   rxNormCode = models.CharField(max_length=50)
   dosage = models.CharField(max_length=50)
   route = models.CharField(max_length=50)
   frequency = models.CharField(max_length=50)
   additionalInstructions = models.CharField(max_length=50)
   
   def __str__(self) -> str:
    return self.name
  
  
  
  
class Doctor(models.Model) :
  name = models.CharField(max_length=50)
  email = models.EmailField()
  password = models.CharField(max_length=50)
  specializations = models.CharField(max_length=50)
  experience = models.IntegerField()
  patients = models.ManyToManyField(Patient, related_name="doctors")
  snippets = models.ManyToManyField(Snippet, related_name="doctors")
  
  def __str__(self) -> str:
    return self.name
  
  
