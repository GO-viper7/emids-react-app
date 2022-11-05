from .views import *
from django.urls import path

urlpatterns = [
  path('', patient, name='patient')
]