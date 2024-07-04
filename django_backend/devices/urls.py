from django.urls import path
from .views import devices_crud

urlpatterns = [path("<str:product_key>/", devices_crud, name="readings_api")]
