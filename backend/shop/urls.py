from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MenuItemViewSet, QuestViewSet

router = DefaultRouter()
router.register(r'menu', MenuItemViewSet)
router.register(r'quests', QuestViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
