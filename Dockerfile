FROM alpine

LABEL maintainer="sovchenko"

RUN apk --no-cache add \
    build-base\
    python3\
    nodejs \
    npm \
    ffmpeg \
    && npm install -g \
    npm@6.14.9 \
    # Clean up obsolete files:
    && rm -rf \
    /tmp/* \
    /root/.npm

WORKDIR /usr/lib/rozetka_wdio_project

COPY package.json /usr/lib/rozetka_wdio_project

COPY package-lock.json /usr/lib/rozetka_wdio_project

RUN npm install \
    # Clean up obsolete files:
    && rm -rf \
    /tmp/* \
    /root/.npm

COPY . /usr/lib/rozetka_wdio_project

ENTRYPOINT [ "npm", "run" ]

CMD ["test"]