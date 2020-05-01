from django.shortcuts import render
from rest_framework import generics, viewsets

from students.models import Student
from .serializers import StudentSerializer

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serialier_class = StudentSerializer

