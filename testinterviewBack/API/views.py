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

@api_view(['POST'])
def getInput(request):
    serializer  = ProblemSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def countNonEmptySubstr(str):
    n = len(str);
    return int(n * (n + 1) / 2);
    