FROM java:8
COPY reactive-0.0.1-SNAPSHOT.jar /reactive.jar
RUN bash -c 'touch /reactive.jar'

EXPOSE 8080

ENTRYPOINT ["java"]
CMD ["-jar", "/reactive.jar"]