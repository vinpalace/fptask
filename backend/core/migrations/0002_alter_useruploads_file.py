# Generated by Django 4.0.5 on 2022-06-28 08:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useruploads',
            name='file',
            field=models.FileField(upload_to='uploads/'),
        ),
    ]