package org.launchcode.blog.S3;

import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.regions.Region;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.transfer.TransferManager;
import com.amazonaws.services.s3.transfer.TransferManagerBuilder;
import com.amazonaws.services.s3.transfer.Upload;
import com.amazonaws.services.s3.transfer.model.UploadResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


@Component
public class S3Service {
	
	private String imageBucket;
	private AmazonS3 amazonS3;
	
	@Autowired
	public S3Service(Region awsRegion, AWSCredentialsProvider awsCredentialsProvider, String imageBucket) {
		this.amazonS3 = AmazonS3ClientBuilder.standard().withCredentials(awsCredentialsProvider).withRegion(awsRegion.getName()).build();
		this.imageBucket = imageBucket;
	}
	
	public UploadResult uploadImageToS3(MultipartFile file) throws IOException, InterruptedException {
		ObjectMetadata omd = new ObjectMetadata();
		omd.setContentLength(file.getSize());
		TransferManager tm = TransferManagerBuilder.standard().withS3Client(this.amazonS3).build();
		PutObjectRequest request = new PutObjectRequest(this.imageBucket, file.getOriginalFilename(), file.getInputStream(), omd).withCannedAcl(CannedAccessControlList.PublicRead);
		Upload upload = tm.upload(request);
		return upload.waitForUploadResult();
	}
}
