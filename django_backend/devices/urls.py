from django.urls import path
from .views import device_list, reading_list, reading_detail

urlpatterns = [
    path("", device_list, name="device_list"),
    path("<str:product_key>/", reading_list, name="reading_list"),
    path("<str:product_key>/<int:reading_id>", reading_detail, name="reading_detail"),
]
