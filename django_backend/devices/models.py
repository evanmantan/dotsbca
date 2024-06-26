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
    data1 = models.FloatField()
    data2 = models.FloatField()
    data3 = models.FloatField()
    data4 = models.FloatField()
    data5 = models.FloatField()
    data6 = models.FloatField()
    data7 = models.FloatField()
    data8 = models.FloatField()
    data9 = models.FloatField()
    data10 = models.FloatField()
    data11 = models.FloatField()

    def __str__(self) -> str:
        return f"Reading {self.id} from {self.device}"


class DeviceList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    device = models.ForeignKey(Device, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f"{self.user} - {self.device}"
