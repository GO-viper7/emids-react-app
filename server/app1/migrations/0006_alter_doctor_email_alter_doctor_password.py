# Generated by Django 4.1.3 on 2022-11-12 18:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0005_doctor_email_doctor_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctor',
            name='email',
            field=models.EmailField(max_length=254),
        ),
        migrations.AlterField(
            model_name='doctor',
            name='password',
            field=models.CharField(max_length=50),
        ),
    ]