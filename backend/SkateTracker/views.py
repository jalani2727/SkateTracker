from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TrickSerializer
from .models import Trick
# Create your views here.

class TrickView(viewsets.ModelViewSet):
    serializer_class = TrickSerializer
    queryet = Trick.objects.all()
