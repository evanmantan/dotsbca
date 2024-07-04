from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Device, Reading
from .serializers import DeviceSerializer, ReadingSerializer


@api_view(["GET", "POST", ""])
def devices_crud(request, product_key, *arg, **kwargs):
    if request.method == "POST":
        try:
            device = Device.objects.get(product_key=product_key)
        except Device.DoesNotExist:
            return Response(
                {"error": "Device not found!"}, status=status.HTTP_404_NOT_FOUND
            )
        
        data = {
            "device": device.id,
            "data1": request.data.get("data1"),
            "data2": request.data.get("data2"),
            "data3": request.data.get("data3"),
            "data4": request.data.get("data4"),
            "data5": request.data.get("data5"),
            "data6": request.data.get("data6"),
            "data7": request.data.get("data7"),
            "data8": request.data.get("data8"),
            "data9": request.data.get("data9"),
            "data10": request.data.get("data10"),
            "data11": request.data.get("data11"),
        }

        serializer = ReadingSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == "GET":
        try:
            device = Device.objects.get(product_key=product_key)
        except Device.DoesNotExist:
            return Response(
                {"error": "Device not found!"}, status=status.HTTP_404_NOT_FOUND
            )
        readings = Reading.objects.filter(device=device.id)
        serializer = ReadingSerializer(readings, many=True)

        return Response(serializer.data)
