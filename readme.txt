# Development of an Application with Laravel, JWT, Vuetify, and TDD

## Table of Contents
- [Environment Setup](#environment-setup)
- [Database Configuration](#database-configuration)
- [Running Tests](#running-tests)
- [Application Architecture Report](#application-architecture-report)
- [Conclusion](#conclusion)

## Environment Setup

### Prerequisites
- PHP ≥ 8.0
- Composer
- Node.js ≥ 12.x
- NPM ≥ 6.x
- MySQL ≥ 5.7

### Installing Laravel
```bash
composer create-project --prefer-dist laravel/laravel project_name "10.*"
cd project_name

#Configuring JWT
composer require tymon/jwt-auth
php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
php artisan jwt:secret
#Installing Vuetify
vue create frontend
cd frontend
vue add vuetify

#Database Configuration
#Configuration in .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=todo
DB_USERNAME=root
DB_PASSWORD=admin

#php artisan migrate
php artisan migrate


#Installing PHPUnit
composer require --dev phpunit/phpunit
#Running Tests
php artisan test


Architecture
The application is structured using Laravel as the backend and Vue.js with Vuetify as the frontend. Authentication is handled using JWT.

Key Decisions
Use of JWT for secure and stateless authentication.
Implementation of Vuetify for a modern and responsive design.
Use of TDD to ensure code quality and functionality.
Test-Driven Development (TDD)
Unit tests were written to validate backend logic.
Integration tests were implemented to ensure that different components of the application interact correctly.
Tests were run regularly to detect and fix errors early.
