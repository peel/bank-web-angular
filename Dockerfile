# Pull base image.
FROM dockerfile/ubuntu

# Install Java.
RUN \
  echo oracle-java7-installer shared/accepted-oracle-license-v1-1 select true | debconf-set-selections && \
  add-apt-repository -y ppa:webupd8team/java && \
  apt-get update && \
  apt-get install -y oracle-java7-installer && \
  rm -rf /var/lib/apt/lists/*

# Install node
RUN \
  curl -sL https://deb.nodesource.com/setup | sudo bash - && \
  sudo apt-get install -y nodejs

# Install modules
RUN npm install -g bower yo grunt-cli

# Install GVM and Spring
RUN curl -s api.gvmtool.net | bash
RUN /bin/bash -c "source "/root/.gvm/bin/gvm-init.sh"; gvm install springboot"
 
# Define working directory.
WORKDIR /data

# Define commonly used JAVA_HOME variable
ENV JAVA_HOME /usr/lib/jvm/java-7-oracle

# Bundle app source
COPY . /src

RUN cd /src; grunt --force

EXPOSE 8080

CMD ["/bin/bash", "spring", "run", "app.groovy"]
