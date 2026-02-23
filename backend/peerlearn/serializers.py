from rest_framework.serializers import ModelSerializer, ReadOnlyField
from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from .models import User, Skill, UserSkills, Session

class SignupSerializer(ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'phone_number', 'password')

    def validate_password(self, value):
        validate_password(value)
        return value

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email'],
            phone_number=validated_data['phone_number'],
            password=validated_data['password'],
            
        )
        return user
    
class SkillSerializers(ModelSerializer):

    class Meta:
        model = Skill
        fields = ['id', 'name', 'slug', 'created_at']
    
class UserSkillsSerializers(ModelSerializer):
    user = ReadOnlyField(source='user.username')
    skill = ReadOnlyField(source='skill.name')

    class Meta:
        model = UserSkills
        fields = ['user', 'skill', 'type', 'level', 'updated_at', 'created_at']

class SessionSerializers(ModelSerializer):
    user = ReadOnlyField(source='user.username')

    class Meta:
        model = Session
        fields = ['name', 'user', 'time', 'description', 'updated_at', 'created_at']