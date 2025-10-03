FROM mcr.microsoft.com/devcontainers/base:ubuntu

# 원하는 Node 버전
ARG NODE_VERSION=22.20.0

# nvm 전역 설치 위치
ENV NVM_DIR=/usr/local/share/nvm
SHELL ["/bin/bash", "-lc"]

RUN apt-get update && apt-get install -y curl ca-certificates git \
 && mkdir -p "$NVM_DIR" \
 && curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash - \
 # nvm 로드 후 Node 설치
 && source "$NVM_DIR/nvm.sh" \
 && nvm install "$NODE_VERSION" \
 && nvm alias default "$NODE_VERSION" \
 # 모든 사용자에게 보이도록 바이너리 심볼릭 링크
 && ln -sf "$NVM_DIR/versions/node/v$NODE_VERSION/bin/node" /usr/local/bin/node \
 && ln -sf "$NVM_DIR/versions/node/v$NODE_VERSION/bin/npm"  /usr/local/bin/npm \
 && ln -sf "$NVM_DIR/versions/node/v$NODE_VERSION/bin/npx"  /usr/local/bin/npx \
 && ln -sf "$NVM_DIR/versions/node/v$NODE_VERSION/bin/corepack" /usr/local/bin/corepack \
 && corepack enable || true \
 # 로그인 셸에서 nvm 자동 로드
 && echo 'export NVM_DIR="/usr/local/share/nvm"' >> /etc/bash.bashrc \
 && echo '[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"' >> /etc/bash.bashrc \
 && apt-get clean && rm -rf /var/lib/apt/lists/*

# devcontainers 기본 사용자
USER vscode
