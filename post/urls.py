
from django.urls import path
from .views import avtomobiles

urlpatterns = [
    path('', avtomobiles, name=''),
]