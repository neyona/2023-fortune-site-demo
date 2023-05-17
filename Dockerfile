FROM python:3.11-alpine

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /app

# install psycopg2 dependencies
# ALPINE CLEANS UP PACKAGES AUTOMATICALLY
# decided not to add numpy/pandas/etc. Will use a different image and
# Dockerfile for that in a different program
RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev

COPY Pipfile Pipfile.lock /app/
RUN pip3 install pipenv && pipenv install --system

# Copy project
COPY . .

# copy entrypoint.sh
COPY ./entrypoint.sh .
RUN sed -i 's/\r$//g' /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

# run entrypoint
ENTRYPOINT ["/app/entrypoint.sh"]

# If it says entrypoint will not run or be found, etc,
# run chmod +x ./entrypoint.sh in the terminal first.
