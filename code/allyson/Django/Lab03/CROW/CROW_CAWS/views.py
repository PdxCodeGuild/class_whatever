from django.shortcuts import render
from django.http import HttpRequest


def CROW_CAWS(response):
    return HttpRequest("CAW!")
