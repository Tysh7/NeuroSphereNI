
import json
from django.core.management.base import BaseCommand
from backend.models import Article  # Adjust this import based on your app's structure

class Command(BaseCommand):
    help = 'Populate database with articles from JSON file'

    def handle(self, *args, **options):
        # Path to your JSON file
        json_file_path = 'C:\\Users\\Tash\\Desktop\\BlogWebApp\\backend\\app\\management\\commands\\article.json'

        with open(json_file_path, 'r') as file:
            articles_data = json.load(file)

        for article_data in articles_data:
            Article.objects.create(
                author=article_data['author'],
                link=article_data['link'],
                title=article_data['title'],
                text=article_data['text']
            )

        self.stdout.write(self.style.SUCCESS('Articles have been successfully populated'))
