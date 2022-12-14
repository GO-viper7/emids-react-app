from .views import *
from django.urls import path

urlpatterns = [
  path('', patient, name='patient'),
  path('auth/doctor/register', doctorRegister, name='doctorRegister'),
  path('auth/doctor/login', doctorLogin, name='doctorRegister'),
  path('doctor/snippets', snippet, name='Snippet'),
  path('speech', speech, name='speech'),
]
