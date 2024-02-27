from django.shortcuts import render

# Create your views here.
# In your views.py
from django.templatetags.static import static

# views.py

# views.py
# views.py
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Article
from .serializers import ArticleSerializer

# View to list all articles or create a new article
@api_view(['GET', 'POST'])
def article_list(request):
    if request.method == 'GET':
        # Retrieve all articles from the database
        articles = Article.objects.all()
        # Serialize the queryset and return as JSON response
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        # Create a new article based on the provided data
        serializer = ArticleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        # If the data provided is invalid, return error response
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# View to retrieve, update, or delete a specific article
@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
def article_detail(request, article_id):
    try:
        # Retrieve the article with the given ID from the database
        article = Article.objects.get(pk=article_id)
    except Article.DoesNotExist:
        # If the article with the given ID does not exist, return 404 error
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        # Serialize the retrieved article and return as JSON response
        serializer = ArticleSerializer(article)
        return Response(serializer.data)

    elif request.method in ['PUT', 'PATCH']:
        # Update the article with the provided data
        serializer = ArticleSerializer(article, data=request.data, partial=request.method == 'PATCH')
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        # If the data provided is invalid, return error response
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        # Delete the article from the database
        article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
