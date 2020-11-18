buyPen, factor, transaction, rowMaterial, material, user, userInfo > factorTime, userId, financialId, financialUser, financialUserId, 

		SELECT * FROM buyPen		
				WHERE 	factor.factorTime BETWEEN $startTime AND
						factor.userId = $userId AND
						factor.financialUserId = $financialId AND
						factor.factorBuyerName LIKE $buyerName AND
						material.materialName LIKE $buyerName AND
						factor.factorId = $id AND
				INNER JOIN factor USING factorId
				INNER JOIN transaction USING factorId
				INNER JOIN rowMaterial USING buyPenId
				INNER JOIN material ON rowMaterial.materialId = material.materialId
				INNER JOIN user ON factor.userId = user.userId
				INNER JOIN userInfo ON factor.userId = userInfo.userId
						
