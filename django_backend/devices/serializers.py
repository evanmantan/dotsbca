from rest_framework import serializers
from .models import Device, Reading, DeviceList
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class DeviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Device
        fields = "__all__"


class ReadingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reading
        fields = "__all__"


class DeviceListSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeviceList
        fields = "__all__"
