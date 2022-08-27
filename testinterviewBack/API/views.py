from django.shortcuts import render
from rest_framework import viewsets

from .serializers import ProblemSerializer
from .models import Problem

# Create your views here.

class ProblemViewSet(viewsets.ModelViewSet):
    queryset = Problem.objects.all().order_by('input')
    serializer_class = ProblemSerializer
