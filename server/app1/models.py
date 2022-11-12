from django.db import models

class Patient(models.Model) :
  name = models.CharField(max_length=50)
  age = models.IntegerField()
  consultedOn = models.DateField()
  consultedWith = models.CharField(max_length=50, default='')
  
  def __str__(self) -> str:
    return self.name
  
class Doctor(models.Model) :
  name = models.CharField(max_length=50)
  specialization = models.CharField(max_length=50)
  experience = models.IntegerField()
  patients = models.ManyToManyField(Patient, related_name="doctors")
  
  def __str__(self) -> str:
    return self.name
  