from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Device, Reading
from .serializers import ReadingSerializer


class ReadingView(APIView):
    def post(self, request, device_id, *arg, **kwargs):
        try:
            device = Device.objects.get(pk=device_id)
        except Device.DoesNotExist:
            return Response(
                {"error": "Device not found!"}, status=status.HTTP_404_NOT_FOUND
            )

        data = {
            "device": device.product_key,
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
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
