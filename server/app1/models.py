from django.db import models

class Patient(models.Model) :
  name = models.CharField(max_length=50)
  age = models.IntegerField()
  symptomOne = models.TextField()
  symptomTwo = models.TextField()
  consultedOn = models.DateField()
  
  def __str__(self) -> str:
    return self.name
  
  