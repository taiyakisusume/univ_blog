FROM node:20.10.0-slim

ENV TZ Asia/Tokyo

RUN apt-get update \
    && apt-get install -y
ENV APP_ROOT /code
WORKDIR ${APP_ROOT}
COPY . ${APP_ROOT}
ENV HOST 0.0.0.0
RUN #yarn install
