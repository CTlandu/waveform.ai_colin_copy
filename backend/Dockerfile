# Build the image with the base image of Node v22 (pulled from hub.docker.com)
FROM docker.io/library/node:22

ENV TIMEZONE="America/New_York"

# Set the timezone and create a non-root user
RUN echo $TIMEZONE > /etc/timezone \
    && cp /usr/share/zoneinfo/$TIMEZONE /etc/localtime \
    && adduser --system --group --home /app app

# Switch to the non-root user
USER app

# Copy our code base into the image, setting ownership to the non-root user
COPY --chown=app:app . /app

# Set /app as the working directory
WORKDIR /app

# Install the production dependencies
RUN npm install --omit=dev

# Specify the command to run on container start
CMD [ "node", "server.js" ]