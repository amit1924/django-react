from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken


@api_view(["POST"])
def register(request):
    print("Request data:", request.data)  # Log the request data
    username = request.data.get("username")
    password = request.data.get("password")
    print("Username:", username)  # Log the username
    print("Password:", password)  # Log the password
    if not username or not password:
        print("Missing username or password")  # Log missing data
        return Response(
            {"error": "Username and password are required."},
            status=status.HTTP_400_BAD_REQUEST,
        )
    if User.objects.filter(username=username).exists():
        print("Username already exists")  # Log duplicate username
        return Response(
            {"error": "Username already exists."}, status=status.HTTP_400_BAD_REQUEST
        )
    user = User(username=username)
    user.set_password(password)
    user.save()
    print("User created successfully")  # Log successful user creation
    return Response(
        {"success": "User registered successfully."}, status=status.HTTP_201_CREATED
    )


@api_view(["POST"])
def login(request):
    try:
        username = request.data.get("username")
        password = request.data.get("password")
        user = User.objects.filter(username=username).first()
        if user and user.check_password(password):
            refresh = RefreshToken.for_user(user)
            return Response(
                {
                    "refresh": str(refresh),
                    "access": str(refresh.access_token),
                }
            )
        return Response(
            {"error": "Invalid credentials."}, status=status.HTTP_401_UNAUTHORIZED
        )
    except Exception as e:
        print(f"Login error: {str(e)}")  # Log the error
        return Response(
            {"error": "Something went wrong."},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )
