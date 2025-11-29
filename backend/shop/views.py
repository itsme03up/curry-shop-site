from rest_framework import viewsets
from .models import MenuItem, Quest
from .serializers import MenuItemSerializer, QuestSerializer

class MenuItemViewSet(viewsets.ModelViewSet):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer

class QuestViewSet(viewsets.ModelViewSet):
    queryset = Quest.objects.filter(is_active=True)
    serializer_class = QuestSerializer
