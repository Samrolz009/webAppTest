from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .serializers import ProblemSerializer
from .models import Problem

# Create your views here.

class ProblemViewSet(viewsets.ModelViewSet):
    queryset = Problem.objects.all().order_by('input')
    serializer_class = ProblemSerializer