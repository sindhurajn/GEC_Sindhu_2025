# Generated by Django 5.0.6 on 2025-03-18 16:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=260)),
                ('email', models.EmailField(max_length=254)),
                ('password', models.CharField(max_length=260)),
            ],
        ),
    ]
