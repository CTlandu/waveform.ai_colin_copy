# Build the image with the base image of Node v22 (pulled from hub.docker.com)
# Name the stage "build" so we can pull elements into a webserver later on.
FROM docker.io/library/node:22 AS build

# Copy our code base into the image
COPY . /app

# Set /app as the working directory
WORKDIR /app

RUN npm install \
    && npm run build

# Build the image with the base image of Nginx v1 (pulled from hub.docker.com)
# This build stage is what will be our final image.
FROM docker.io/library/nginx:1

# Copy the nginx.conf file into the image
COPY nginx.conf /etc/nginx/conf.d/default.conf

# copy the build output from the build stage into the image
COPY --from=build /app/dist /usr/share/nginx/html