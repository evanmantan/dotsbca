from django.contrib import admin
from .models import Device, Reading, DeviceList

admin.site.register(Device)
admin.site.register(Reading)
admin.site.register(DeviceList)
