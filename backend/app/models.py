from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    link = models.URLField()
    text = models.TextField()

    def __str__(self):
        return self.title
