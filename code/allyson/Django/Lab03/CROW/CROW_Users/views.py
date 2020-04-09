from django.shortcuts import render
from django.http import HttpRequest


def CROW_Users(response):
    return HttpRequest("CAW!")
