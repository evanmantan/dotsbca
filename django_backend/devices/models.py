from django.db import models
from django.contrib.auth.models import User


class Device(models.Model):
    name = models.CharField(max_length=100)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=False)
    product_key = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.name


class Reading(models.Model):
    device = models.ForeignKey(Device, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # TODO: Add other info fields according to hardware
    data1 = models.FloatField(default=0, null=True)
    data2 = models.FloatField(default=0, null=True)
    data3 = models.FloatField(default=0, null=True)
    data4 = models.FloatField(default=0, null=True)
    data5 = models.FloatField(default=0, null=True)
    data6 = models.FloatField(default=0, null=True)
    data7 = models.FloatField(default=0, null=True)
    data8 = models.FloatField(default=0, null=True)
    data9 = models.FloatField(default=0, null=True)
    data10 = models.FloatField(default=0, null=True)
    data11 = models.FloatField(default=0, null=True)

    def __str__(self) -> str:
        return f"Reading {self.id} from {self.device}"


class DeviceList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    device = models.ForeignKey(Device, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f"{self.user} - {self.device}"
