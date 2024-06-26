from django.urls import path
from .views import ReadingView

urlpatterns = [
    path("<str:device_id>/readings/", ReadingView.as_view(), name="reading_create")
]
