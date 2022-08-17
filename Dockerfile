FROM ubuntu

WORKDIR /home/app

COPY /app /home/app

# PACKAGES
RUN apt-get update && \
		apt-get upgrade -y && \
		apt-get install -y \
		mc \
		nano \
		curl \
		wget \
		bash \
		gnupg \
		nodejs \
		npm \
		zsh

# install zsh
RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# update && install NODEJS
ENV NODE_VERSION=18.3.0
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

RUN npm install -g npm@8.12.2

RUN export DOCKER_SCAN_SUGGEST=false

EXPOSE ${PORT_1}
EXPOSE ${PORT_2}
EXPOSE ${PORT_3}

