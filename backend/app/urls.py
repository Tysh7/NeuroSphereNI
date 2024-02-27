from django.contrib import admin
from django.urls import path


#Gets all articles 
urlpatterns = [
    path('', views.index,name='index'),
      path('api/articles/', views.article_list),
    path('api/articles/<int:article_id>/', views.article_detail),
]
