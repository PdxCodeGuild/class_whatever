from rest_framework import serializers
from students.models import Student

class StudentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Student
        fields = ["last_name", "first_name", "cohort", "favorite_topic", "favorite_teacher", "capstone"]