from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TrickSerializer
from .models import Trick

# NOTE: The viewsets base class provides the implementation for CRUD operations by default, what we had to do was specify the serializer class and the query set.

# Create your views here.

class TrickView(viewsets.ModelViewSet):
    serializer_class = TrickSerializer
    queryset = Trick.objects.all()
    
