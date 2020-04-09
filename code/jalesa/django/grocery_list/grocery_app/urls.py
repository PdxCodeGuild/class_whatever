
from django.urls import path
from . import views


app_name = 'grocery_app'
urlpatterns = [
    path('',views.index, name='index'), 
    path('add/',views.add, name='add'), 
    path('delete/', views.delete, name='delete'),
    path('completed/<int:completed_id>', views.completed, name="completed")
]

'''
"add/" will be placed after localhost 8000
look in views and find the method add. It will load that method.
the path wont work unlessit has a name. Its best practice 
to give the name the same name as the method.
'''