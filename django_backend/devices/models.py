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
    data1 = models.FloatField(default=0)
    data2 = models.FloatField(default=0)
    data3 = models.FloatField(default=0)
    data4 = models.FloatField(default=0)
    data5 = models.FloatField(default=0)
    data6 = models.FloatField(default=0)
    data7 = models.FloatField(default=0)
    data8 = models.FloatField(default=0)
    data9 = models.FloatField(default=0)
    data10 = models.FloatField(default=0)
    data11 = models.FloatField(default=0)
    probability = models.FloatField(default=0)
    diagnosis = models.BooleanField(default=False)

    def __str__(self) -> str:
        return f"Reading {self.id} from {self.device}"

    def save(self, *args, **kwargs):
        if self.data2 <= 1506.64625:
            self.probability += 20
        if self.data3 <= 3642.04625:
            self.probability += 20
        if self.data4 <= 3214.433:
            self.probability += 20
        if self.data5 <= 2086.866:
            self.probability += 20
        if self.data6 <= 1309.0539:
            self.probability += 20
        self.diagnosis = self.probability >= 50

        super().save(*args, **kwargs)


class DeviceList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    device = models.ForeignKey(Device, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f"{self.user} - {self.device}"
