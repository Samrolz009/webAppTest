from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from .serializers import ProblemSerializer
from .models import Problem
from .problem2 import Problem2

# Create your views here.

class ProblemViewSet(viewsets.ModelViewSet):
    queryset = Problem.objects.all()
    serializer_class = ProblemSerializer
    
    def create(self, request, *args, **kwargs):

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        result = Problem2.maxValue(Problem2,serializer.data.get('input'))
        return Response(
            {'id': serializer.data.get('id'), 'input':serializer.data.get('input'), 'result':result},
        )